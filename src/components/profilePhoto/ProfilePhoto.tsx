import Image from "next/image";
import photo from "@/content/about/1691513210104.jpg";

const ProfilePhoto = () => {
  return (
    <div className="flex w-2/3 justify-center sm:w-80 md:w-2/5">
      <div className="relative w-11/12 after:transition-all after:ease-in after:-z-10 after:absolute after:top-3 after:left-3 after:w-full after:h-full after:border-2 after:border-primary after:dark:border-dark-primary after:rounded-md hover:after:translate-x-1 hover:after:translate-y-1">
        <div className="rounded-md overflow-hidden z-10 transition-all ease-in hover:-translate-x-1 hover:-translate-y-1 before:absolute before:top-0 before:w-full before:h-full before:bg-primary/20 before:dark:bg-dark-primary/50 before:hover:hidden">
          <Image
            src={photo}
            alt="Luis' photo"
            className="w-auto h-auto"
            width="1200"
            height="1200"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
