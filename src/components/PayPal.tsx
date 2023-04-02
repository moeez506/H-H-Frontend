import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import type {
  //   OnApproveData,
  //   OnApproveActions,
  CreateOrderData,
  CreateOrderActions,
} from "@paypal/paypal-js";
import {
  createGroupApi,
  createRepresentative,
  updateRepresentative,
} from "../apis/groupOnboading";
import { dataRepresentative } from "../utils/representativeData";

interface PayPalProps {
  className: string;
  am: string;
  contextData: any;
}

export default function PayPal({ am, className, contextData }: PayPalProps) {
  const {
    createGroup,
    representativeOne,
    representativeThree,
    representativeTwo,
  } = contextData;
  const groupData = {
    associationName: createGroup.groupName,
    websiteLink: createGroup.website,
    phoneNumbers: [createGroup.cellNumber],
    registeredMembers: createGroup.registerdMembers,
    email: createGroup.email,
    address: createGroup.email,
    zipCode: createGroup.zipCode,
    country: createGroup.countryOfOperation,
  };
  const representativeOneData = {
    dateOfBirth: representativeOne.dob,
    placeOfBirth: representativeOne.placeOfBirth,
    nationality: representativeOne.nationality,
    address: representativeOne.address,
    zipCode: representativeOne.zipCode,
    phoneNumbers: {
      Home: representativeOne.homePhoneNumber.toString(),
      Cell: representativeOne.cellNumber.toString(),
    },
    countryOfResidence: representativeOne.countryOfResidence,
    positionOccupied: representativeOne.positionOccupied,
  };

  const representativeTwoData = dataRepresentative(representativeTwo);
  const representativeThreeData = dataRepresentative(representativeThree);

  async function addGroup(orderId: string, payerId: string) {
    console.log(orderId, payerId);
    if (!orderId || !payerId) {
      alert("Failed to Pay Money");
      return;
    }

    createGroupApi(groupData).then(async (res) => {
      const response = await Promise.all([
        updateRepresentative({
          ...representativeOneData,
          groupId: res.group._id,
        }),
        createRepresentative({
          ...representativeTwoData,
          groupId: res.group._id,
        }),
        createRepresentative({
          ...representativeThreeData,
          groupId: res.group._id,
        }),
      ]);
      console.log(response, "REs");
    });
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID as string}`,
      }}
    >
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "white",
          height: 50,
          shape: "rect",
        }}
        className={`flex items-center w-[211px]  border border-gray-300 shadow-sm rounded ${className} cursor-pointer`}
        createOrder={async (
          _: CreateOrderData,
          actions: CreateOrderActions
        ) => {
          return await actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: am,
                },
              },
            ],
          });
        }}
        onApprove={async (data: any, _: any): Promise<void> => {
          addGroup(data.orderID, data.payerID);
        }}
      />
    </PayPalScriptProvider>
  );
}
