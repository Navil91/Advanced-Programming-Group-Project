import { Flex, Grid, GridItem, Group, Text } from "@chakra-ui/react";
import StatWidgetInfo from "../widgets/StatWidgetInfo";
import AreaCharts from "../charts/AreaCharts";
import Map from "../ui/map";
import CityList from "../widgets/CityList";
// eslint-disable-next-line react/prop-types
export default function HomeGrid({ currentUser }) {
  return (
    <Grid
      h="auto"
      templateRows="1fr 3fr"
      templateColumns="repeat(4, 1fr)"
      columnGap="6"
      rowGap="20px"
      // padding="52px"
    >
      <GridItem
        bgColor="#FAFAFA"
        w="full"
        h="120px"
        borderRadius={8}
        padding="16px"
      >
        <StatWidgetInfo label="No. of Users" text="450" />
      </GridItem>
      <GridItem
        bgColor="#FAFAFA"
        w="full"
        h="120px"
        borderRadius={8}
        padding="16px"
      >
        <StatWidgetInfo label="No. of Cities" text="5" />
      </GridItem>
      <GridItem
        bgColor="#FAFAFA"
        w="full"
        h="120px"
        borderRadius={8}
        padding="16px"
      >
        <StatWidgetInfo label="No. of Providers" text="3" />
      </GridItem>
      <GridItem
        bgColor="#FAFAFA"
        w="full"
        h="120px"
        borderRadius={8}
        padding="16px"
      >
        <StatWidgetInfo label="Monthly Average" text="1150kWh" />
      </GridItem>
      {/* Map and city widget  */}
      <GridItem
        colSpan={2}
        rowSpan={4}
        bgColor="#FAFAFA"
        w="full"
        borderRadius={8}
        padding="16px"
      >
        <Group
          flexDirection="column"
          textAlign="left"
          alignItems="start"
          gap={1}
          mb="32px"
          w="full"
        >
          <Text textStyle="lg">Monthly Average</Text>
          <Text textStyle="sm">
            Graph showing Monthly Average Electricity Usage
          </Text>
        </Group>
        <Flex gap={3}>
          <Map />
          <CityList currentUser={currentUser} />
        </Flex>
      </GridItem>
      {/* Average usage chart widget  */}
      <GridItem
        colSpan={2}
        rowSpan={4}
        bgColor="#FAFAFA"
        w="full"
        borderRadius={8}
        padding="16px"
      >
        <Group
          flexDirection="column"
          textAlign="left"
          alignItems="start"
          gap={1}
          mb="32px"
          w="full"
        >
          <Text textStyle="lg">Monthly Average</Text>
          <Text textStyle="sm">
            Graph showing Monthly Average Electricity Usage
          </Text>
        </Group>
        <AreaCharts />
      </GridItem>
    </Grid>
  );
}
