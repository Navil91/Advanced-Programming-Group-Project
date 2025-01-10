import { List, Group, Link } from "@chakra-ui/react";
import "../ui/style.css";

function CityList() {
  return (
    <List.Root gap="20px" variant="plain" align="center" w="full">
      {/* First list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorNewcastle.svg" alt="City Indicator Newcastle" />
          <p>Newcastle</p>
        </Group>
        <Link className="btn-outline">View Details</Link>
      </List.Item>
      {/* 2nd list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorSunderland.svg" alt="City Indicator Newcastle" />
          <p>Sunderland</p>
        </Group>
        <Link className="btn-outline">View Details</Link>
      </List.Item>
      {/* 3rd list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorDurham.svg" alt="City Indicator Newcastle" />
          <p>Durham</p>
        </Group>
        <Link className="btn-outline">View Details</Link>
      </List.Item>
      {/* 4th list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorDarlington.svg" alt="City Indicator Newcastle" />
          <p>Darlington</p>
        </Group>
        <Link className="btn-outline">View Details</Link>
      </List.Item>
      {/* 5th list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img
            src="/IndicatorMiddlesbrough.svg"
            alt="City Indicator Newcastle"
          />
          <p>Middlesbrough</p>
        </Group>
        <Link className="btn-outline">View Details</Link>
      </List.Item>
    </List.Root>
  );
}

export default CityList;
