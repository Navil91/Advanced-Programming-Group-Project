import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import AreaCharts from "../charts/AreaCharts";
import BarCharts from "../charts/BarCharts";
import UserTabs from "./UserTabs";
export default function HomeGrid() {
  return (
    <Grid
      h="auto"
      templateRows="1fr 2fr"
      templateColumns="repeat(3, 1fr)"
      columnGap="6"
      rowGap="20px"
      // padding="52px"
    >
      <GridItem bgColor="#fafafa" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            Monthly Avg of Provider A
          </Text>
          <AreaCharts />
        </Flex>
      </GridItem>
      {/* Card 2  */}
      <GridItem bgColor="#fafafa" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            Monthly Avg of Provider B
          </Text>
          <AreaCharts />
        </Flex>
        {/* Card 3  */}
      </GridItem>
      <GridItem bgColor="#fafafa" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            Monthly Avg of Provider C
          </Text>
          <AreaCharts />
        </Flex>
      </GridItem>
      {/* Card 4 Table  */}
      <GridItem bgColor="#fafafa" colSpan="2" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            <UserTabs />
          </Text>
        </Flex>
      </GridItem>
      {/* Card 5 Bar plot  */}
      <GridItem bgColor="#fafafa" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            Monthly Avg of Provider A
          </Text>
          <BarCharts />
        </Flex>
      </GridItem>
    </Grid>
  );
}
