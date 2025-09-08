'use client';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';
import { PlusIcon } from 'lucide-react';
export function Levels() {
  // Mock data for levels
  const [levels, setLevels] = useState([
    {
      id: 1,
      name: 'Junior Secondary 1',
      code: 'JS1',
      students: 210,
      classes: 5,
    },
    {
      id: 2,
      name: 'Junior Secondary 2',
      code: 'JS2',
      students: 195,
      classes: 5,
    },
    {
      id: 3,
      name: 'Junior Secondary 3',
      code: 'JS3',
      students: 187,
      classes: 4,
    },
    {
      id: 4,
      name: 'Senior Secondary 1',
      code: 'SS1',
      students: 175,
      classes: 4,
    },
    {
      id: 5,
      name: 'Senior Secondary 2',
      code: 'SS2',
      students: 168,
      classes: 4,
    },
    {
      id: 6,
      name: 'Senior Secondary 3',
      code: 'SS3',
      students: 150,
      classes: 3,
    },
  ]);
  // State for form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    students: '',
    classes: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  // Table columns
  const columns = [
    {
      key: 'name',
      header: 'Level Name',
    },
    {
      key: 'code',
      header: 'Code',
    },
    {
      key: 'students',
      header: 'Students',
    },
    {
      key: 'classes',
      header: 'Classes',
    },
  ];
  // Handlers
  const handleEdit = (item: any) => {
    setFormData({
      name: item.name,
      code: item.code,
      students: item.students.toString(),
      classes: item.classes.toString(),
    });
    setEditingId(item.id);
    setIsFormOpen(true);
  };
  const handleDelete = (item: any) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      setLevels(levels.filter((level) => level.id !== item.id));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLevel = {
      id: editingId || Math.max(...levels.map((l) => l.id), 0) + 1,
      name: formData.name,
      code: formData.code,
      students: parseInt(formData.students) || 0,
      classes: parseInt(formData.classes) || 0,
    };
    if (editingId) {
      setLevels(
        levels.map((level) => (level.id === editingId ? newLevel : level))
      );
    } else {
      setLevels([...levels, newLevel]);
    }
    // Reset form
    setFormData({
      name: '',
      code: '',
      students: '',
      classes: '',
    });
    setEditingId(null);
    setIsFormOpen(false);
  };
  return (
    <DashboardLayout title="Academic Levels">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Manage Academic Levels
        </h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Add New Level
        </button>
      </div>
      {isFormOpen && (
        <Card className="mb-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code
                </label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      code: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Students
                </label>
                <input
                  type="number"
                  value={formData.students}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      students: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Classes
                </label>
                <input
                  type="number"
                  value={formData.classes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      classes: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setEditingId(null);
                  setFormData({
                    name: '',
                    code: '',
                    students: '',
                    classes: '',
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
                {editingId ? 'Update Level' : 'Add Level'}
              </button>
            </div>
          </form>
        </Card>
      )}
      <Card>
        <DataTable
          columns={columns}
          data={levels}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>
    </DashboardLayout>
  );
}
