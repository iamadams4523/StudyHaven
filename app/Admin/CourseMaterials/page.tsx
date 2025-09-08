import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';
import { PlusIcon, FilterIcon, UploadIcon } from 'lucide-react';
export function CourseMaterials() {
  // Mock data for course materials
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: 'Mathematics Algebra Notes',
      subject: 'Mathematics',
      level: 'SS2',
      type: 'Notes',
      size: '2.4 MB',
      uploadDate: '2023-09-15',
    },
    {
      id: 2,
      title: 'English Grammar Workbook',
      subject: 'English',
      level: 'JS3',
      type: 'Workbook',
      size: '3.7 MB',
      uploadDate: '2023-09-10',
    },
    {
      id: 3,
      title: 'Physics Motion Slides',
      subject: 'Physics',
      level: 'SS1',
      type: 'Slides',
      size: '5.2 MB',
      uploadDate: '2023-09-05',
    },
    {
      id: 4,
      title: 'Chemistry Periodic Table Guide',
      subject: 'Chemistry',
      level: 'SS2',
      type: 'Guide',
      size: '1.8 MB',
      uploadDate: '2023-08-28',
    },
    {
      id: 5,
      title: 'Biology Cell Structure Diagram',
      subject: 'Biology',
      level: 'SS1',
      type: 'Diagram',
      size: '4.1 MB',
      uploadDate: '2023-08-20',
    },
    {
      id: 6,
      title: 'History Nigerian Civil War Notes',
      subject: 'History',
      level: 'SS3',
      type: 'Notes',
      size: '3.3 MB',
      uploadDate: '2023-08-15',
    },
  ]);
  // State for form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    level: '',
    type: '',
    file: null as File | null,
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  // Filter states
  const [filters, setFilters] = useState({
    subject: '',
    level: '',
    type: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  // Table columns
  const columns = [
    {
      key: 'title',
      header: 'Title',
    },
    {
      key: 'subject',
      header: 'Subject',
    },
    {
      key: 'level',
      header: 'Level',
    },
    {
      key: 'type',
      header: 'Type',
    },
    {
      key: 'size',
      header: 'Size',
    },
    {
      key: 'uploadDate',
      header: 'Upload Date',
    },
  ];
  // Handlers
  const handleEdit = (item: any) => {
    setFormData({
      title: item.title,
      subject: item.subject,
      level: item.level,
      type: item.type,
      file: null,
    });
    setEditingId(item.id);
    setIsFormOpen(true);
  };
  const handleDelete = (item: any) => {
    if (window.confirm(`Are you sure you want to delete ${item.title}?`)) {
      setMaterials(materials.filter((m) => m.id !== item.id));
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would upload the file here
    const currentDate = new Date().toISOString().split('T')[0];
    const fileSize = formData.file
      ? `${(formData.file.size / (1024 * 1024)).toFixed(1)} MB`
      : '0 MB';
    const newMaterial = {
      id: editingId || Math.max(...materials.map((m) => m.id), 0) + 1,
      title: formData.title,
      subject: formData.subject,
      level: formData.level,
      type: formData.type,
      size:
        editingId && !formData.file
          ? materials.find((m) => m.id === editingId)?.size || fileSize
          : fileSize,
      uploadDate: currentDate,
    };
    if (editingId) {
      setMaterials(
        materials.map((m) => (m.id === editingId ? newMaterial : m))
      );
    } else {
      setMaterials([...materials, newMaterial]);
    }
    // Reset form
    setFormData({
      title: '',
      subject: '',
      level: '',
      type: '',
      file: null,
    });
    setEditingId(null);
    setIsFormOpen(false);
  };
  // Filter data
  const filteredData = materials.filter((m) => {
    return (
      (filters.subject === '' ||
        m.subject.toLowerCase().includes(filters.subject.toLowerCase())) &&
      (filters.level === '' || m.level === filters.level) &&
      (filters.type === '' || m.type === filters.type)
    );
  });
  // Get unique values for filters
  const subjects = [...new Set(materials.map((m) => m.subject))];
  const levels = [...new Set(materials.map((m) => m.level))];
  const types = [...new Set(materials.map((m) => m.type))];
  return (
    <DashboardLayout title="Course Materials">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Manage Course Materials
        </h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="border border-gray-300 bg-white text-gray-700 py-2 px-4 rounded-md flex items-center hover:bg-gray-50"
          >
            <FilterIcon className="h-5 w-5 mr-1" />
            Filters
          </button>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-1" />
            Add Material
          </button>
        </div>
      </div>
      {showFilters && (
        <Card className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                value={filters.subject}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    subject: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">All Subjects</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                value={filters.level}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    level: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">All Levels</option>
                {levels.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={filters.type}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    type: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">All Types</option>
                {types.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>
      )}
      {isFormOpen && (
        <Card className="mb-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <select
                  value={formData.level}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      level: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="JS1">JS1</option>
                  <option value="JS2">JS2</option>
                  <option value="JS3">JS3</option>
                  <option value="SS1">SS1</option>
                  <option value="SS2">SS2</option>
                  <option value="SS3">SS3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Notes">Notes</option>
                  <option value="Slides">Slides</option>
                  <option value="Workbook">Workbook</option>
                  <option value="Guide">Guide</option>
                  <option value="Diagram">Diagram</option>
                  <option value="Video">Video</option>
                  <option value="Audio">Audio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload File
                </label>
                <div className="flex items-center">
                  <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <UploadIcon className="h-5 w-5 mr-2" />
                    {formData.file ? 'Change File' : 'Select File'}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="sr-only"
                      required={!editingId}
                    />
                  </label>
                  {formData.file && (
                    <span className="ml-3 text-sm text-gray-500">
                      {formData.file.name} (
                      {(formData.file.size / (1024 * 1024)).toFixed(1)} MB)
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setEditingId(null);
                  setFormData({
                    title: '',
                    subject: '',
                    level: '',
                    type: '',
                    file: null,
                  });
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                {editingId ? 'Update Material' : 'Add Material'}
              </button>
            </div>
          </form>
        </Card>
      )}
      <Card>
        <DataTable
          columns={columns}
          data={filteredData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>
    </DashboardLayout>
  );
}
