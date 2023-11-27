import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ViewVolenteers = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    fetch("http://localhost:5300/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5300/events/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = events.filter((e) => e._id !== id);
              setEvents(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-28 mx-auto w-full border-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>NO.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events &&
              events.map((event, index) => {
                return (
                  <tr key={event._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={event?.img}
                        width={"100px"}
                        className="rounded-md"
                      />
                    </td>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>
                      {" "}
                      <button
                        aria-label="delete"
                        onClick={() => handleDeleteClick(event._id)}
                      >
                        X
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewVolenteers;
