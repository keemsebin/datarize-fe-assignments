import { Flex } from '../Flex';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex dir="col" gap={16} className="mx-auto max-w-7xl p-4 md:p-10">
      {children}
    </Flex>
  );
};
