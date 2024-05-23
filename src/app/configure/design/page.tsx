import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });
  if (!configuration) return notFound();

  const { imageUrl, width, height, id: configId } = configuration;

  return (
    <>
      <DesignConfigurator
        configId={configId}
        imageUrl={imageUrl}
        imageDimensions={{ width, height }}
      />
    </>
  );
};

export default Page;
