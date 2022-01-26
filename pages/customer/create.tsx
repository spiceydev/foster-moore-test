import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Yup from "yup";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import Select from "../../components/Select";
import { countries } from "../../util/countries";
import { client } from "../../util/genqlClient";

const CreateCustomerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  placeOfBirth: Yup.string().required("Required"),
  licenseNumber: Yup.string(),
  licenseDate: Yup.date(),
  licenseImageUrl: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
});

interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  licenseNumber?: string;
  licenseDate?: string;
  licenseImageUrl?: string;
}

export default function Create() {
  const initialFormValues: FormValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    licenseNumber: "",
    licenseDate: "",
    licenseImageUrl: "",
  };

  const router = useRouter();
  const [error, setError] = useState(null);
  const [image, setImage] = useState<any>();
  const [imageUrl, setImageUrl] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);

  const uploadImage = () => {
    setIsImageLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "my-uploads");
    data.append("cloud_name", "dqkykbrwu");
    fetch("https://api.cloudinary.com/v1_1/dqkykbrwu/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
        setIsImageLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsImageLoading(false);
      });
  };

  const handleOnSubmit = async (values: FormValues) => {
    await client
      .mutation({
        createCustomer: [
          {
            firstName: values.firstName,
            lastName: values.lastName,
            dateOfBirth: `${new Date(values.dateOfBirth).toISOString()}`,
            placeOfBirth: values.placeOfBirth,
            licenseNumber: values.licenseNumber,
            licenseDate: `${
              values.licenseDate
                ? new Date(values.licenseDate).toISOString()
                : ""
            }`,
            licenseImageUrl: imageUrl,
          },
          {
            id: true,
          },
        ],
      })
      .then((response: any) => {
        router.push("/");
      })
      .catch((error: any) => setError(error.message));
  };

  return (
    <>
      {error && <pre>{error}</pre>}
      <div className="flex flex-row justify-end">
        <Link href="/">
          <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            &#8592; Back
          </a>
        </Link>
      </div>
      <div className="mb-8">
        <Formik
          initialValues={initialFormValues}
          validationSchema={CreateCustomerSchema}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Input
                id="firstName"
                label="First Name"
                error={errors.firstName}
                touched={touched.firstName}
              />

              <Input
                id="lastName"
                label="Last Name"
                error={errors?.lastName}
                touched={touched?.lastName}
              />
              <Input
                id="dateOfBirth"
                label="Date Of Birth"
                error={errors?.dateOfBirth}
                touched={touched?.dateOfBirth}
                type="date"
              />

              <Select
                id="placeOfBirth"
                label="Place Of Birth"
                error={errors?.placeOfBirth}
                touched={touched?.placeOfBirth}
                options={countries}
              />

              <Input
                id="licenseNumber"
                label="License Number"
                error={errors?.licenseNumber}
                touched={touched?.licenseNumber}
              />

              <Input
                id="licenseDate"
                label="License Date"
                error={errors?.licenseDate}
                touched={touched?.licenseDate}
                type="date"
              />

              {imageUrl && (
                <>
                  <Image
                    src={imageUrl}
                    alt=""
                    width="200"
                    height="200"
                    className="object-contain"
                  ></Image>
                </>
              )}
              <h4 className="block text-sm font-medium text-gray-700">
                License Image
              </h4>
              <input
                type="file"
                name="file"
                onChange={(e) => setImage(e?.target?.files?.[0])}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              {imageUrl && (
                <button
                  type="button"
                  onClick={uploadImage}
                  className="inline-flex items-center px-4 py-2 mt-8 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isImageLoading && <Loader type="button" />} Upload Image
                </button>
              )}
              <br />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 mt-8 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting && <Loader type="button" />} Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
