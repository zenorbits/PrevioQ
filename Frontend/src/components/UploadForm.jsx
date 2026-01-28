import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUploadFileMutation } from '../redux/api/fileApi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UploadForm = () => {
  const [uploader, setUploader] = useState("")
  const [tags, setTags] = useState("")
  const [file, setFile] = useState(null)
  const [customName, setCustomName] = useState("")   // 👈 new state for custom filename
  const [uploadFile, { isLoading }] = useUploadFileMutation()

  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      console.log("Selected file:", selectedFile.name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const finalUploader = uploader.trim() === "" ? "Anonymous" : uploader.trim()

    if (!file) {
      toast.error("No file selected. Please choose a file before submitting.")
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('uploader', finalUploader)
    formData.append('tags', tags)
    formData.append('customName', customName) // 👈 send custom name to backend

    try {
      await uploadFile(formData).unwrap()
      toast.success("File uploaded successfully!")

      // Reset form
      setUploader("")
      setTags("")
      setFile(null)
      setCustomName("")
    } catch (err) {
      console.error("Upload failed:", err)
      toast.error("Upload failed. Please try again.")
    }
  }

  const handleCancel = () => {
    setUploader("")
    setTags("")
    setFile(null)
    setCustomName("")
    toast.info("Upload cancelled.")
    setTimeout(() => navigate('/user'), 1000)
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-mono overflow-hidden px-4">
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg"></div>

      {/* Floating gradient orbs */}
      <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* Form Card */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Upload Resource
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Uploader */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Uploader Name</label>
            <input
              type="text"
              value={uploader}
              onChange={(e) => setUploader(e.target.value)}
              placeholder="Leave blank for Anonymous"
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Custom File Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Custom File Name</label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Optional custom name"
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Select File</label>
            <div className="flex items-center space-x-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
              />
              <label
                htmlFor="fileUpload"
                className="cursor-pointer px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow hover:scale-105 transform transition"
              >
                Choose File
              </label>
              {file && (
                <p className="text-sm text-gray-400">Selected: {file.name}</p>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. notes, certificate"
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              disabled={isLoading}
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transform transition"
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick />
    </div>
  )
}

export default UploadForm