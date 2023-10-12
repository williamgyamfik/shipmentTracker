import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

export default function CardSettings(props) {
  const [details, setDetails] = useState();

  const [orderNo, setOrderNo] = useState(details?.orderNo);
  const [consignee, setConsignee] = useState(details?.consignee);
  const [customer, setCustomer] = useState(details?.customer);
  const [date, setDate] = useState(details?.date);
  const [status, setStatus] = useState(details?.status);
  const [trackingNo, setTrackingNo] = useState(details?.trackingNo);

  useEffect(() => {
    setDetails(props.detailData);
  }, [props.detailData]);

  useEffect(() => {
    setOrderNo(details?.orderNo);
    setConsignee(details?.consignee);
    setCustomer(details?.customer);
    setDate(details?.date);
    setTrackingNo(details?.trackingNo);
    setStatus(details?.status);
  }, [
    details?.consignee,
    details?.orderNo,
    details?.customer,
    details?.status,
    details?.date,
    details?.trackingNo,
  ]);

  const closeDetailHandler = () => {
    props.setCloseDetail(false);
  };

  const trackingOrderHandler = (e) => {
    setOrderNo(e.target.value);
  };

  const consigneeHandler = (e) => {
    setConsignee(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const customerHandler = (e) => {
    setCustomer(e.target.value);
  };

  const trackingNoHandler = (e) => {
    setTrackingNo(e.target.value);
  };

  const updatedDetailsHandler = () => {
    const details = {
      consignee,
      orderNo,
      customer,
      trackingNo,
      date,
      status,
    };

    props.updatedDetails(details);
  };

  return (
    <>
      <div className=" z-50  fixed flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <hr className="mt-6 border-b-1 border-blueGray-300" />
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              SHIPMENT DETAILS
            </h6>
            <div className="flex justify-end">
              <button
                className="bg-red-600 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeDetailHandler}
              >
                <i className="fa-solid fa-xmark">x</i>
              </button>
            </div>
            <div className="flex flex-wrap ">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    orderNo
                  </label>
                  <input
                    type="text"
                    className="bg-blueGray-200  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={orderNo}
                    onChange={trackingOrderHandler}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    date
                  </label>
                  <input
                    type="email"
                    className="bg-blueGray-200   border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={date}
                    onChange={dateHandler}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    customer
                  </label>
                  <input
                    type="text"
                    className="bg-blueGray-200  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={customer}
                    onChange={customerHandler}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    trackingNo
                  </label>
                  <input
                    type="text"
                    className="bg-blueGray-200  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={trackingNo}
                    onChange={trackingNoHandler}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    consignee
                  </label>
                  <input
                    type="text"
                    className="bg-blueGray-200  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={consignee}
                    onChange={consigneeHandler}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block  text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    status
                  </label>
                  <input
                    type="text"
                    className="bg-blueGray-200  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={status}
                    onChange={statusHandler}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={updatedDetailsHandler}
                >
                  Update details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

CardSettings.propTypes = {
  setCloseDetail: PropTypes.func.isRequired,
  detailData: PropTypes.object.isRequired,
  updatedDetails: PropTypes.func.isRequired,
};
