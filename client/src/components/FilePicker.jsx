import React from "react";
import CustomButton from "./CustomButton";
import { getContrastingColor } from "../config/helpers";
import state from "../store";
import { useSnapshot } from "valtio";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label
          htmlFor="file-upload"
          className="filepicker-label"
          style={{ color: `${getContrastingColor(snap.color)}` }}
        >
          Upload your picture
        </label>
        <p
          className="mt-2 text-xs truncate"
          style={{ color: `${getContrastingColor(snap.color)}` }}
        >
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
