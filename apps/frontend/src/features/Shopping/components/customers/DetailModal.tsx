import { shoppingQueryOptions } from '@/features/Shopping/api/shopping.queries';
import { Customer } from '@/features/Shopping/api/shopping.types';
import { Flex } from '@/shared/components/Flex';
import { Loading } from '@/shared/components/Loading';
import { Modal } from '@/shared/components/Modal';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/Table';
import { Text } from '@/shared/components/Text';
import { useQuery } from '@tanstack/react-query';

export type DetailModalProps = {
  selectedCustomer: Customer | null;
  isOpen: boolean;
  onClose: () => void;
};

export const DetailModal = ({ selectedCustomer, isOpen, onClose }: DetailModalProps) => {
  const { data: customerPurchases, isLoading } = useQuery({
    ...shoppingQueryOptions.customersPurchases(selectedCustomer?.id ?? 0),
    enabled: selectedCustomer !== null,
  });

  if (isLoading) {
    return <Loading className="h-[400px] w-full" />;
  }

  if (selectedCustomer === null) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="space-y-4">
          <Text type="Heading" weight="semibold">
            고객 정보를 선택해주세요.
          </Text>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="space-y-4">
          <Text type="Heading" weight="semibold">
            {selectedCustomer.name} 님의 구매 내역
          </Text>
          <>
            <Table className="mt-5 h-[400px] overflow-y-auto">
              <TableHeader>
                <TableRow>
                  <TableHead>날짜</TableHead>
                  <TableHead>상품명</TableHead>
                  <TableHead>수량</TableHead>
                  <TableHead>가격</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customerPurchases?.map((purchase, index) => (
                  <TableRow key={index}>
                    <TableCell>{purchase.date}</TableCell>
                    <TableCell>
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={purchase.imgSrc}
                          alt={purchase.product}
                          className="size-20 object-contain"
                        />
                        <span>{purchase.product}</span>
                      </div>
                    </TableCell>
                    <TableCell>{purchase.quantity}</TableCell>
                    <TableCell>{purchase.price.toLocaleString()}원</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Flex dir="row" justifyContent="between" className="border-t border-gray-200 pt-4">
              <Text type="Title" weight="semibold">
                총 구매 수량: {selectedCustomer.count}개
              </Text>
              <Text type="Title" weight="semibold">
                총 금액: {selectedCustomer.totalAmount.toLocaleString()}원
              </Text>
            </Flex>
          </>
        </div>
      </Modal>
    </>
  );
};
