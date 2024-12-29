import { usePreview } from "../../contexts/PreviewContext";

const FontCard = ({
  font,
  styles,
  fontLoading,
}: {
  font: string;
  styles: number;
  fontLoading: boolean;
}) => {
  const defaultText =
    "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.";

  const { previewText, previewSize } = usePreview();

  const onFontClick = () => {
    const queryParams = window.location.search;
    window.location.href = `${window.location.origin}/specimen/${font}${queryParams}`;
  };

  return (
    <div
      onClick={onFontClick}
      className=" p-6 pb-8 max-w-full flex flex-col gap-4 hover:bg-[#2d2e31] rounded-md cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <p className=" text-base text-[#e8eaed] font-bold">{font}</p>
        <p className=" text-sm text-[#9aa0a6] font-medium">{styles} style</p>
        <p className=" text-sm text-[#9aa0a6] font-medium">|</p>
        <p className=" text-sm text-[#9aa0a6] font-medium">
          Christian Robertson
        </p>
      </div>
      <div className="overflow-x-hidden whitespace-nowrap max-w-full">
        <p
          style={{ fontSize: previewSize, fontFamily: font }}
          className={`text-[#e8eaed] font-bold ${
            fontLoading
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {previewText || defaultText}
        </p>
      </div>
    </div>
  );
};

export default FontCard;
