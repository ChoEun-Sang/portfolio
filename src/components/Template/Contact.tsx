"use client";
import { useState } from "react";
import { client } from "@/lib/client";
import { maskName, truncateContact } from "@/utility";
import Button from "../Common/Button";

interface ContactState {
  id: number;
  name: string;
  contact: string;
}
function Contact() {
  const [contactList, setContactList] = useState<ContactState[]>([]);
  const [contactData, setContactData] = useState({
    name: "",
    contact: "",
  });

  const getContacts = async () => {
    const { data, error } = await client.from("contact").select();

    return { data, error };
  };

  const insertContact = async () => {
    const { error } = await client.from("contact").insert({
      name: contactData.name,
      contact: contactData.contact,
    });

    if (error) {
      alert("연락처 등록 오류");
    } else {
      setContactData({
        name: "",
        contact: "",
      });
      const { data, error: err } = await getContacts();
      if (data) setContactList(data);
      if (err) alert("연락처 불러오기 오류");
    }
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <div>
      <main className="mt-20 w-screen h-full flex flex-col justify-center items-center">
        <h1>연락처 등록</h1>
        <form className="flex flex-col gap-5 mt-6">
          <div>
            <label
              htmlFor="이름"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              이름
            </label>
            <input
              type="text"
              id="이름"
              name="name"
              onChange={onChange}
              value={contactData.name}
              className="bg-gray-500 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="이름"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              연락처
            </label>
            <textarea
              id="message"
              name="contact"
              onChange={onChange}
              value={contactData.contact}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="연락처를 남겨주세요."
            ></textarea>
          </div>
          <Button onClick={insertContact} className="shrink-0">
            <span>등록</span>
          </Button>
        </form>

        {contactList.length > 0 && (
          <ul className="mt-5 flex flex-col gap-3">
            {contactList.map((contact, idx) => (
              <li key={contact.id}>
                <div>
                  <strong>
                    {idx + 1}. {maskName(contact.name)}
                  </strong>
                  <p> {truncateContact(contact.contact, 5)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default Contact;
