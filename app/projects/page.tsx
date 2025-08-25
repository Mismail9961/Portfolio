"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    link: "",
    uses: [] as string[],
  });
  const [techInput, setTechInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Check if token exists, otherwise redirect to login
  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (!savedToken) {
      router.push("/admin-login");
    } else {
      setToken(savedToken);
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTech = () => {
    if (techInput.trim() && !form.uses.includes(techInput.trim())) {
      setForm({ ...form, uses: [...form.uses, techInput.trim()] });
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech: string) => {
    setForm({ ...form, uses: form.uses.filter((t) => t !== tech) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("/api/projects", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(res.data.message || "Product added successfully!");
      setForm({ name: "", description: "", link: "", uses: [] });
    } catch (error: any) {
      // Check if the token is invalid or expired
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin-login");
        return;
      }
      setMessage(error.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add New Product
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-md text-gray-900"
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-md text-gray-900"
          required
        />

        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={form.link}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-md text-gray-900"
          required
        />

        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add Language/Technology"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="flex-grow p-3 border rounded-md text-gray-900"
            />
            <button
              type="button"
              onClick={handleAddTech}
              className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {form.uses.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
