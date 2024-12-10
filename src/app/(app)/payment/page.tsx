"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useCoursePaymentMutation } from "@/redux/query/transaction";

const PaymentComponent: React.FC = () => {
  const { data: session } = useSession();
  const [makePayment] = useCoursePaymentMutation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const course = JSON.parse(localStorage.getItem('selectedCourse') || '{}');
  const router = useRouter();

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };
  const handleProceedPayment = async () => {
    try {
      const paymentData = {
        courseId: course._id,
        courseAmount: course.price,
        userId: session?.user._id
      }
      const { data } = await makePayment(paymentData);
      if (data.success) {
        window.location.href = data.data; 
      } else {
        console.error('Payment initiation failed:', data.message);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  }
  return (
    <div>
      <div
        onClick={() => {
          localStorage.removeItem('selectedCourse')
          router.back()
        }}
        className="flex cursor-pointer items-center px-4 mt-4">
        <Image
          src="/icons/greaterThan.png"
          alt="back icon"
          width={20}
          height={20}
          className="object-contain rotate-180"
        />
        <span className="font-bold text-lg">Back</span>
      </div>
      <div className="flex space-x-8 p-8">
        {/* Left side: Selected Course */}
        <div className="w-1/2 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Selected Course</h2>
          <div className="flex">
            <Image
              src={course.thumbnail}
              alt={course.title}
              width={200}
              height={200}
              className="w-24 h-24 mr-4 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p>{course.description}</p>
              <p className="font-bold mt-4">
                Price: NPR {course.price}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Payment Methods */}
        <div className="w-1/2 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Choose a Payment Method</h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Payment Method: Khalti */}
            <div
              onClick={() => handlePaymentMethodSelect("Khalti")}
              className={`cursor-pointer p-4 border rounded-lg shadow-sm ${
                selectedPaymentMethod === "Khalti"
                  ? "border-indigo-600 bg-gray-100"
                  : "border-gray-300"
              }`}
            >
              <Image
                src="/icons/khalti.png"
                alt="esewa logo"
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-center font-semibold">Khalti</p>
            </div>

            {/* Payment Method: eSewa */}
            <div
              onClick={() => handlePaymentMethodSelect("eSewa")}
              className={`cursor-pointer p-4 border rounded-lg shadow-sm ${
                selectedPaymentMethod === "eSewa"
                  ? "border-indigo-600 bg-gray-100"
                  : "border-gray-300"
              }`}
            >
              <Image
                src="/icons/esewa.png"
                alt="esewa logo"
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-center font-semibold">Esewa</p>
            </div>

            {/* Payment Method: IME Pay */}
            <div
              onClick={() => handlePaymentMethodSelect("IME")}
              className={`cursor-pointer p-4 border rounded-lg shadow-sm ${
                selectedPaymentMethod === "IME"
                  ? "border-indigo-600 bg-gray-100"
                  : "border-gray-300"
              }`}
            >
              <Image
                src="/icons/ime.png"
                alt="esewa logo"
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-center font-semibold">ImePay</p>
            </div>

            {/* Payment Method: Banking */}
            <div
              onClick={() => handlePaymentMethodSelect("Banking")}
              className={`cursor-pointer p-4 border rounded-lg shadow-sm ${
                selectedPaymentMethod === "Banking"
                  ? "border-indigo-600 bg-gray-100"
                  : "border-gray-300"
              }`}
            >
              <Image
                src="/icons/banking.png"
                alt="banking logo"
                width={50}
                height={50}
                className="mx-auto mb-2"
              />
              <p className="text-center font-semibold">Mobile Banking</p>
            </div>
          </div>

          {/* Selected Payment Method */}
          {selectedPaymentMethod && (
            <div className="mt-6">
              <p className="text-lg font-medium text-center">
                Selected Payment Method: {selectedPaymentMethod}
              </p>
              <button
                onClick={handleProceedPayment}
                className="w-full mx-auto text-center text-white hover:bg-indigo-600/90 bg-indigo-600 rounded-md py-2 my-2 px-2">
                Proceed Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
