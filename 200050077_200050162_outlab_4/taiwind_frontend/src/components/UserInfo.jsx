import { useState, useEffect } from "react";
import { login, register, userInfo } from "../components/auth-api";

export default function InfoUser() {
  const [info, setInfo] = useState({});
  // const []
  useEffect(() => {
    async function fetchData() {
      const res = await userInfo();
      console.log(res);
      setInfo(res);
    }
    fetchData();
  }, []);

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
              Your Selection
            </h3>
            <div class="w-full overflow-x-auto">
              <table class="w-full whitespace-no-wrap">
                <thead>
                  <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                    <th class="px-4 py-3">Your ID </th>
                    <th class="px-4 py-3">{info.user.id}</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y">
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Date of Birth</td>
                    <td class="px-4 py-3">{info.user.dob}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Email-ID</td>
                    <td class="px-4 py-3">{info.user.emailid}</td>
                  </tr>
                  <tr class="text-gray-700">
                    <td class="px-4 py-3">Mobile Number</td>
                    <td class="px-4 py-3">{info.user.mobileno}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
