/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

export const Modal = ({ children, id, buttonLabel, genderType,
  usia, nama }) => {
  return (
    <div>
      <label htmlFor={id} className="btn btn-square m-2">
        {buttonLabel}
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-start px-10">
          <h1 className="text-xl font-medium">Hello User!</h1>
          <p className="py-1">{`Your Age : ${usia}`}</p>
          <p className="py-1">{`Your Gender : ${genderType}`}</p>
          <p className="py-1 capitalize">{`Your Name : ${nama}`}</p>
          <h1 className="font-semibold ">Kata kata untuk Hari ini: </h1>
          <p className="talic font-medium text-gray-600">"{children}"</p>
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </div>
  );
};
