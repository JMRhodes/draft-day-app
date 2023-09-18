import Player from "./Player";

const Available = ({ players }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-2">
                Position
              </th>
              <th scope="col" className="px-3 py-2">
                Name
              </th>
              <th scope="col" className="px-3 py-2">
                Team
              </th>
              <th scope="col" className="px-3 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <Player key={index} player={player} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Available;
