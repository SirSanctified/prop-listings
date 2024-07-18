import { Property, PropertyResponse, type Data } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getLatestProperties(): Promise<{
  data?: Data;
  error?: string;
}> {
  let data: Data | undefined;
  let error: string | undefined;
  try {
    const response = await api.get<PropertyResponse>("/latest");
    data = response.data.data ?? undefined;
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred";
  }
  return { data, error };
}

export async function getPropertiesForSaleOrRent(
  type: "sale" | "rent" = "sale"
): Promise<{
  data: Property[] | undefined;
  error?: string;
}> {
  let data: Property[] | undefined;
  let error: string | undefined;
  try {
    const response = await api.get<Property[]>(
      `/${
        type === "sale" ? "for-sale?search=for-sale" : "to-rent?search=to-rent"
      }`
    );
    data = response.data ?? undefined;
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred";
  }
  return { data, error };
}

export async function getPropertyById(id: string): Promise<{
  data: Property | undefined;
  error?: string;
}> {
  let data: Property | undefined;
  let error: string | undefined;
  try {
    const response = await api.get<Property>(`/details/${id}`);
    data = response.data ?? undefined;
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred";
  }
  return { data, error };
}
