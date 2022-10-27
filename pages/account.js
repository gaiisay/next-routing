import { Router, useRouter } from "next/router";

export default function Account() {
  const router = useRouter();

  return (
    <>
      <h1>Account content here</h1>
      <div>
        <label>
          Username: <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" />
        </label>
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            // TODO: change page to '/'
            router.push("/", "home");
          }, 3000);
        }}
      >
        Login
      </button>
    </>
  );
}
