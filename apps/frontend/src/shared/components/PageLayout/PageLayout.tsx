import { Flex } from "../Flex"

export  const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex dir="col" gap={16} className="p-10 max-w-7xl mx-auto">
      {children}
    </Flex>
  )
}