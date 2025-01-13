import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import AreaCharts from "../charts/AreaCharts";
import BarCharts from "../charts/BarCharts";
import UserTabs from "./UserTabs";
import { useState, useEffect } from "react";
export default function HomeGrid() {
  const [userConsumption, setuserConsumption] = useState([]);

  useEffect(function () {
    async function getConsumptionData() {
      try {
        const res = await fetch(
          "http://localhost:8650/api/provider/getallconsumption"
        );
        if (!res.ok) throw new Error("Something went wrong with fetching");
        const data = await res.json();
        setuserConsumption(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getConsumptionData();
  }, []);

  // Helper function to calculate averages and create the JSON
  function calculateProviderData(data) {
    // Group data by provider
    const groupedByProvider = data.reduce((acc, curr) => {
      if (!acc[curr.provider]) {
        acc[curr.provider] = [];
      }
      acc[curr.provider].push(curr);
      return acc;
    }, {});

    // Process each provider
    const result = {};
    for (const provider in groupedByProvider) {
      const providerData = groupedByProvider[provider];

      // Group provider data by date
      const groupedByDate = providerData.reduce((acc, curr) => {
        if (!acc[curr.date]) {
          acc[curr.date] = [];
        }
        acc[curr.date].push(curr.consumption);
        return acc;
      }, {});

      // Calculate the average consumption for each date
      result[provider] = Object.entries(groupedByDate).map(
        ([date, consumptions]) => {
          const average =
            consumptions.reduce((sum, value) => sum + value, 0) /
            consumptions.length;
          return {
            name: date,
            uv: average.toFixed(2), // Change the key to 'uv' and format to 2 decimal places
          };
        }
      );
    }

    return result;
  }

  // Generate the arrays for all providers
  const providerData = calculateProviderData(userConsumption);

  // Extract each provider's array
  const providerAArray = providerData["A"];
  const providerBArray = providerData["B"];
  const providerCArray = providerData["C"];

  function createConsumptionJson(providerA, providerB, providerC) {
    // Combine the data from all providers
    const combinedData = {};

    // Helper function to add data to the combined object
    const addToCombined = (providerArray, providerName) => {
      if (Array.isArray(providerArray)) {
        providerArray.forEach(({ name, uv }) => {
          if (!combinedData[name]) {
            combinedData[name] = {
              name,
              Provider_A: 0,
              Provider_B: 0,
              Provider_C: 0,
            };
          }
          combinedData[name][providerName] = parseFloat(uv);
        });
      }
    };

    // Add data for each provider
    addToCombined(providerA, "Provider_A");
    addToCombined(providerB, "Provider_B");
    addToCombined(providerC, "Provider_C");

    // Convert the combined data object to an array
    return Object.values(combinedData);
  }

  const finalData = createConsumptionJson(
    providerAArray,
    providerBArray,
    providerCArray
  );

  // Log the result
  console.log(finalData);
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
          <AreaCharts chartdata={providerAArray} />
        </Flex>
      </GridItem>
      {/* Card 2  */}
      <GridItem bgColor="#fafafa" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            Monthly Avg of Provider B
          </Text>
          <AreaCharts chartdata={providerBArray} />
        </Flex>
        {/* Card 3  */}
      </GridItem>
      <GridItem bgColor="#fafafa" padding="16px" borderRadius="8px">
        <Flex flexDirection="column" gap="2rem">
          <Text textStyle="md" fontWeight="medium">
            Monthly Avg of Provider C
          </Text>
          <AreaCharts chartdata={providerCArray} />
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
            Monthly Avg of All Providers
          </Text>
          <BarCharts chartdata={finalData} />
        </Flex>
      </GridItem>
    </Grid>
  );
}
