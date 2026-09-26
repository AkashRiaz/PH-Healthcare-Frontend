import apiClient from "@/lib/apiClient";
import {
  PublicDoctorProfile,
  type ApiResponse,
  type BookAppointmentPayload,
  type BookAppointmentResponse,
} from "@/types";

export function bookAppointment(payload: BookAppointmentPayload) {
  return apiClient<ApiResponse<BookAppointmentResponse>>(
    "/appointment/book-appointment",
    {
      method: "POST",
      body: payload,
    },
  );
}

export function getMyAppointments(params: { page?: number; limit?: number }) {
  return apiClient<ApiResponse<{ doctor: PublicDoctorProfile, status: string, id: string }[]>>(
    "/appointment/my-appointments",
    {
      params,
    },
  );
}
