const socials = [
  {
    handle: "pythonid",
    logo: "/instagram.svg",
    href: "https://www.instagram.com/pythonid/",
  },
  {
    handle: "id_python",
    logo: "/twitter.svg",
    href: "https://twitter.com/id_python",
  },
  {
    handle: "pycon@python.or.id",
    logo: "/mail.svg",
    href: "mailto:pycon@python.or.id",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#42449e] px-4 py-6 lg:p-16">
      <div className=" rounded-3xl bg-white p-8 lg:p-12">
        <div className="space-y-8">
          <div className="flex gap-8 items-center justify-center flex-col xl:flex-row">
            <img src="/pythonid.svg" alt="logo_pycon" />
            <div>
              <p>
                PyCon APAC 2024 is hosted by Python Jogja and Python Indonesia.
              </p>
              <p>
                For the latest information and contact information for PyCon
                APAC 2023, please visit our{" "}
                <a
                  href="https://python.or.id"
                  className="font-bold text-[#42449e] hover:underline"
                >
                  blog
                </a>
                .
              </p>
              <ul className="order-2 flex flex-row md:flex-row md:gap-7 lg:gap-4">
                {socials.map((social) => (
                  <li
                    key={social.href}
                    className="md:text-md text-base hover:underline "
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2"
                    >
                      <img
                        src={social.logo}
                        alt={`${social.handle} logo`}
                        className="mr-3 h-5 w-5 md:h-6 md:w-6"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
