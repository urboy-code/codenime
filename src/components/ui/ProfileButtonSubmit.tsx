'use client'

import { useFormStatus } from "react-dom"

const Submit = () => {

  const {pending} = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-text-primary px-6 py-2 rounded-lg flex items-center gap-2 font-medium text-base cursor-pointer disabled:cursor-progress disabled:opacity-50"
    >
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
}

export default Submit