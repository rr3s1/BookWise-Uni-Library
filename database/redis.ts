import { Redis } from "@upstash/redis";
import config from "@/lib/config";

const redis = new Redis({
  url: config.env.upstash.redisUrl,
  token: config.env.upstash.redisToken,
});

export default redis;
