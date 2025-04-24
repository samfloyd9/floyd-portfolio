import { MdOutlineSettings } from "react-icons/md";

function BankingPage() {
  return (
    <div className="flex justify-center items-center content-center flex-col w-2/3 mx-auto">
      <div className="border border-1 rounded-md border-gray-200 border-solid px-14 py-10 flex flex-col justify-center shadow-lg">
        <div className="mb-10 flex flex-col justify-center items-center content-center">
          <a
            className="text-2xl text-blue-500 hover:underline hover:text-blue-500 mb-2"
            target="_blank"
            rel="noreferrer"
            href="https://banking-lac-ten.vercel.app"
          >
            JSM Banking App - Horizon
          </a>
          <p className="text-sm">
            Horizon is a financial SaaS platform that connects to multiple bank
            accounts, displays transactions in real-time, allows users to
            transfer money to other platform users, and manages their finances
            altogether. This app was built within the JavaScript Mastery course.
          </p>
        </div>
        <div className="flex flex-col w-fit justify-center content-center items-center mx-auto">
          <div className="flex flex-row items-center border border-1 rounded-md border-gray-300 border-solid p-1 px-1.5 mb-4">
            <MdOutlineSettings className="mr-2 text-2xl" />
            <div className="font-bold text-lg">Tech Stack</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center">
                  <img
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt="next.js"
                    className="mr-2 max-h-6 max-w-6"
                  />
                  <div>Next.js</div>
                </div>
                <div className="flex flex-row items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="typescript" className="mr-2 max-h-6 max-w-6" />
                  <div>TypeScript</div>
                </div>
                <div className="flex flex-row items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="tailwind" className="mr-2 max-h-6 max-w-6" />
                  <div>TailwindCSS</div>
                </div>
                <div className="flex flex-row items-center">
                  <img src="https://appwrite.io/assets/logomark/logo.png" alt="appwrite" className="mr-2 max-h-6 max-w-6" />
                  <div>Appwrite</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center">
                  <img src="https://cdn-images-1.medium.com/max/1200/1*7B-88PmnmGE5J7oRQscIeg.png" alt="plaid" className="mr-2 max-h-6 max-w-6" />
                  <div>Plaid</div>
                </div>
                <div className="flex flex-row items-center">
                  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/dwolla_logo_icon_171208.png" alt="dwolla" className="mr-2 max-h-6 max-w-6" />
                  <div>Dwolla</div>
                </div>
                <div className="flex flex-row items-center">
                  <img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" alt="React Hook Form" className="mr-2 max-h-6 max-w-6" />
                  <div className="text-nowrap text-ellipsis">React Form</div>
                </div>
                <div className="flex flex-row items-center">
                  <img src="https://seeklogo.com/images/S/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png?v=638421451470000000" alt="ShadCN" className="mr-2 max-h-6 max-w-6" />
                  <div>ShadCN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingPage;
