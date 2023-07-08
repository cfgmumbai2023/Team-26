import CardWithHeader from "@/components/generic/CardWithHeader";
import StudentListItem from "./StudentListItem";

const groups = ["1", "2", "3"];

function Groups(props) {
  const [currentGroup, setCurrentGroup] = useState(groups[0]);

  return (
    <CardWithHeader
      header={
        <div>
          <h2>Groups</h2>
          <select value={currentGroup} onChange={() => {}}>
            {groups?.map((group) => {
              return <option value={group} />;
            })}
          </select>
        </div>
      }
    >
      <div>
        {students?.map((student) => {
          return <StudentListItem />;
        })}
      </div>
    </CardWithHeader>
  );
}

export default Groups;
