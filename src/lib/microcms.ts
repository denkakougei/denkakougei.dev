import type {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Work = {
  title: string;
  eyecatch: MicroCMSImage | null;
  link: string;
} & MicroCMSListContent;

export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.getList<Work>({ endpoint: "works", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Work>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
