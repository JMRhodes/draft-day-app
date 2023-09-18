const Player = ({ player }) => {
  const borderColors = {
    QB: "indigo-200",
    RB: "green",
    WR: "yellow",
    TE: "orange",
  };

  return (
    <>
      <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-0 m-0">
          <div
            className={`bg-gray-100 py-4 bg border-l-4 border-${
              borderColors[player.Position]
            }`}
          >
            <div className="font-normal text-gray-400 text-center">
              {player.Position}
            </div>
          </div>
        </td>
        <td
          scope="row"
          className="flex items-center py-2 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="pl-3">
            <div className="text-base font-semibold">{player.Name}</div>
            <div className="font-normal text-gray-400">{player.Team}</div>
          </div>
        </td>
        <td className="px-4 py-2">{player.Position}</td>
        <td className="px-4 py-2">
          <a
            href="#"
            type="button"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit user
          </a>
        </td>
      </tr>
    </>
  );
};

export default Player;
