"use client";

export const Main = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Javascript Binary (File, Blob, FileReader, ArrayBuffer, Base64)</h1>
      </div>
      <div>
        <input type="file" onChange={e => {
            console.log(e.target.files)
        }} />
      </div>
    </div>
  );
};
