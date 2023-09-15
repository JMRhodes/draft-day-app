const Player = ({ player }) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="flex items-center px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-8 h-8 rounded-full"
            src="https://freesvg.org/img/abstract-user-flat-4.png"
          />
          <div className="pl-3">
            <div className="text-base font-semibold">{player.Name}</div>
            <div className="font-normal text-gray-400">{player.Team}</div>
          </div>
        </th>
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
