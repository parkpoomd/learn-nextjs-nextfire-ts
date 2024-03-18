import Link from "next/link";

export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className="bg-gray-100 border-b">
      <ul className="flex items-center justify-between max-w-6xl mx-auto">
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>

        {username && (
          <>
            <li>
              <Link href="/admin">
                <button>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} alt="" />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li>
            <Link href="/enter">
              <button>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
