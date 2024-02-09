import { Icon } from "@iconify/react";
const PaymentForm = ({ onClose, card }) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-ltGrey  ">
      <div className="flex m-3 w-full  ">
        <Icon onClick={onClose} icon="icon-park:close" className="flex " />
      </div>
    </div>
  );
};
export default PaymentForm;
