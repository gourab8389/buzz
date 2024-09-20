import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SkyDrive`.
 */
export type SkyDriveProps = SliceComponentProps<Content.SkyDriveSlice>;

/**
 * Component for "SkyDrive" Slices.
 */
const SkyDrive = ({ slice }: SkyDriveProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sky_drive (variation: {slice.variation}) Slices
    </section>
  );
};

export default SkyDrive;
