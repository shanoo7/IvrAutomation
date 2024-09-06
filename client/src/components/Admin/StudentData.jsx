import { TeamData } from "./utils/data/Data";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported correctly

const acceptedIds = [1, 2, 5, 7, 8];

function StudentData() {
  return (
    <div className="py-10 mx-4 md:mx-11" id="Team">
      <div className="flex flex-col gap-6">
        {TeamData.map((item) => (
          <div
            className={`text-black p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start justify-between text-left bg-white border ${
              acceptedIds.includes(item._id)
                ? "border-green-500"
                : "border-red-500"
            } w-full max-w-3xl mx-auto`}
            key={item._id}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={item.imageURL}
                alt={item.name}
                className="rounded-full max-w-[80px] md:max-w-[100px] h-auto mr-4"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-1">
                  {item.name}
                </h2>
                <p className="text-base md:text-lg font-medium">
                  {item.Username}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              {acceptedIds.includes(item._id) ? (
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm md:text-base">
                  ALREADY ACCEPTED !
                </div>
              ) : (
                <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm md:text-base">
                  DECLINED by HR !
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentData;
