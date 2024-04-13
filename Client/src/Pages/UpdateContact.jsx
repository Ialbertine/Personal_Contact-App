import React from 'react'

const UpdateContact = () => {
  return (
    <div>
      <div className="">
        <h2>Add Contact</h2>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem
          voluptatem dicta consectetur.
        </p>
      </div>
      <form
        onSubmit={handleSubmitContact}
        className="mx-auto mt-8 mb-8 max-w-md space-y-4"
      >
        <div className="relative">
          <input
            type="text"
            name="fullName"
            value={contact.fullName}
            onChange={handleInput}
            className="w-full rounded-lg border-[Black] p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter full name"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInput}
            className="w-full rounded-lg border-[black] p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleInput}
            className="w-full rounded-lg border-[black] p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            {loading && "loading...🐥"}
            {!loading && "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact