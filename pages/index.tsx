import Link from "next/link";
import useSWR from "swr";
import { client } from "../util/genqlClient";

export default function Home() {
  const fetcher = () =>
    client.query({
      getCustomers: {
        id: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        placeOfBirth: true,
        licenseNumber: true,
        licenseDate: true,
        licenseImageUrl: true,
      },
    });

  const { data, error } = useSWR("/customers", fetcher);

  return (
    <div>
      <div className="flex flex-row justify-end mb-8">
        <Link href="/customer/create">
          <a className="inline-flex items-center px-4 py-2 mt-8 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {" "}
            Create Customer &#8594;
          </a>
        </Link>
      </div>
      {error && <p>Oops, something went wrong!</p>}

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Date Of Birth
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      ID Provided
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.getCustomers &&
                    data.getCustomers.map((customer, idx) => (
                      <tr
                        key={customer.id}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          <Link href={`customer/${customer.id}`}>
                            <a>
                              {customer.firstName} {customer.lastName}
                            </a>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {new Date(customer.dateOfBirth).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {customer.licenseNumber ? "Yes" : "No"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
