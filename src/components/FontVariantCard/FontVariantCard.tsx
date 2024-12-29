const FontVarirantCart = ({
  font,
  fontLoading,
  fontVariant,
  previewText,
  previewSize,
}: {
  font: string;
  fontLoading: boolean;
  fontVariant: string;
  previewText: string;
  previewSize: number;
}) => {
  const defaultText =
    "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.";

  const mapFontVariant = (variant: string): string => {
    switch (variant) {
      case "100":
        return "Thin 100";
      case "100italic":
        return "Thin 100 Italic";
      case "200":
        return "Extra Light 200";
      case "200italic":
        return "Extra Light 200 Italic";
      case "300":
        return "Light 300";
      case "300italic":
        return "Light 300 Italic";
      case "regular":
        return "Regular";
      case "italic":
        return "Regular Italic";
      case "500":
        return "Medium 500";
      case "500italic":
        return "Medium 500 Italic";
      case "600":
        return "SemiBold 600";
      case "600italic":
        return "SemiBold 600 Italic";
      case "700":
        return "Bold 700";
      case "700italic":
        return "Bold 700 Italic";
      case "800":
        return "Extra Bold 800";
      case "800italic":
        return "Extra Bold 800 Italic";
      case "900":
        return "Black 900";
      case "900italic":
        return "Black 900 Italic";
      default:
        return variant;
    }
  };

  const isItalic = (variant: string): boolean => {
    return variant.toLowerCase().includes("italic");
  };

  const getFontWeight = (variant: string): number => {
    const weightCode = variant.slice(0, 3);
    switch (weightCode) {
      case "100":
        return 100;
      case "200":
        return 200;
      case "300":
        return 300;
      case "reg":
        return 400;
      case "500":
        return 500;
      case "600":
        return 600;
      case "700":
        return 700;
      case "800":
        return 800;
      case "900":
        return 900;
      default:
        return 300;
    }
  };

  return (
    <div className=" max-w-full overflow-hidden border-y border-y-[#9AA0A6] pt-4 pb-5">
      <p className=" text-sm text-[#9AA0A6]">{mapFontVariant(fontVariant)}</p>
      <p
        style={{
          fontSize: previewSize,
          fontFamily: font,
          fontStyle: isItalic(fontVariant) ? "italic" : "normal",
          fontWeight: getFontWeight(fontVariant),
        }}
        className={`text-white text-nowrap ${
          fontLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {previewText || defaultText}
      </p>
    </div>
  );
};
export default FontVarirantCart;
