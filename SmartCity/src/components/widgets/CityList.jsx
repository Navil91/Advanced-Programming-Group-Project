import { List, Group, Link } from "@chakra-ui/react";
import "../ui/style.css";

// eslint-disable-next-line react/prop-types
function CityList({ currentUser }) {
  return (
    <List.Root gap="20px" variant="plain" align="center" w="full">
      {/* First list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorNewcastle.svg" alt="City Indicator Newcastle" />
          <p>Newcastle</p>
        </Group>
        {currentUser == "admin" ? (
          <Link
            className="btn-outline"
            href="http://localhost:5003/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
          </Link>
        ) : (
          ""
        )}
      </List.Item>
      {/* 2nd list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorSunderland.svg" alt="City Indicator Newcastle" />
          <p>Sunderland</p>
        </Group>
        {currentUser == "admin" ? (
          <Link
            className="btn-outline"
            href="http://localhost:5002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
          </Link>
        ) : (
          ""
        )}
      </List.Item>
      {/* 3rd list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorDurham.svg" alt="City Indicator Newcastle" />
          <p>Durham</p>
        </Group>
        {currentUser == "admin" ? (
          <Link
            className="btn-outline"
            href="http://localhost:5004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
          </Link>
        ) : (
          ""
        )}
      </List.Item>
      {/* 4th list item  */}
      <List.Item justifyContent="space-between">
        <Group>
          <img src="/IndicatorDarlington.svg" alt="City Indicator Newcastle" />
          <p>Darlington</p>
        </Group>
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
      </List.Item>
    </List.Root>
  );
}

export default CityList;
