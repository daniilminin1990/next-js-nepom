import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <h1>About us</h1>
    <ul>
      <li><Link href="/about/contacts">Contacts</Link></li> {/*Будем использовать Link со ссылкой на контакты. Путь пишется целиком */}
      <li><Link href="/about/team">Team</Link></li>
    </ul>
    {children}
  </div>
}