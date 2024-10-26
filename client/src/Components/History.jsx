import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const History = () => {
  const { history } = useContext(AppContext);

  return (
    <div>
      <dialog id="my_modal_3" className="modal border rounded-md">
        <div className="modal-box px-10 py-5">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <p className="text-xl mb-2 font-semibold">User History</p>
            {history.map((item, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm text-neutral-800">
                  Date: <span className="text-xs">{item.date}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Points Awarded:{" "}
                  <span className="font-medium text-md">
                    {item.pointsAwarded}
                  </span>
                </p>
                <hr className="w-full mt-1" />
              </div>
            ))}
          </div>
          <p className="py-4 text-xs">
            Press ESC key or click on ✕ button to close
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default History;
