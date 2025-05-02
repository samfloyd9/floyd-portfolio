function LoginButton({ sessionId, setAccountId, accountId, setSessionId, setLists, lists, logout, getRequestToken }) {

  return (
    <div className="relative flex flex-row justify-center items-center">
      {/* Login Button - This will also trigger session ID retrieval after approval */}
      {!sessionId ? (
        <div className="flex flex-row items-center gap-4 ">
        <button
          onClick={getRequestToken}
          className="px-4 py-2 bg-orange-400 text-md text-nowrap text-white rounded-md hover:bg-orange-500"
        >
          Login with TMDB
        </button>
        {/* <p className="text-md font-bold text-gray-600">Login to create lists and rate movies!!!</p> */}
        </div>
      ) : (
        // Show Logout Button when logged in
        <div className="flex flex-row items-center gap-4 ">
          <button
            onClick={logout}
            className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
          {/* <p className="text-sm font-bold text-gray-600">Successfully Logged in with TMDB</p> */}
        </div>
      )}
      {/* {sessionId && (
        <p className="text-lg font-bold text-gray-300">
          Session ID: {sessionId}
        </p>
      )} */}
    </div>
  );
}

export default LoginButton;