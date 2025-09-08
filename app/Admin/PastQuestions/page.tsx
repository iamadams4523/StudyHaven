'use client';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';
import { PlusIcon, FilterIcon } from 'lucide-react';
const PastQuestions = () => {
  // Mock data for past questions
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: 'Mathematics 2022 Final Exam',
      subject: 'Mathematics',
      level: 'SS3',
      year: '2022',
      questions: 50,
    },
    {
      id: 2,
      title: 'English Language 2022 Final Exam',
      subject: 'English',
      level: 'SS3',
      year: '2022',
      questions: 60,
    },
    {
      id: 3,
      title: 'Physics 2022 Final Exam',
      subject: 'Physics',
      level: 'SS3',
      year: '2022',
      questions: 40,
    },
    {
      id: 4,
      title: 'Chemistry 2022 Final Exam',
      subject: 'Chemistry',
      level: 'SS3',
      year: '2022',
      questions: 45,
    },
    {
      id: 5,
      title: 'Biology 2022 Final Exam',
      subject: 'Biology',
      level: 'SS3',
      year: '2022',
      questions: 50,
    },
    {
      id: 6,
      title: 'Mathematics 2021 Final Exam',
      subject: 'Mathematics',
      level: 'SS3',
      year: '2021',
      questions: 50,
    },
    {
      id: 7,
      title: 'English Language 2021 Final Exam',
      subject: 'English',
      level: 'SS3',
      year: '2021',
      questions: 60,
    },
  ]);
  // State for form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    level: '',
    year: '',
    questions: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  // Filter states
  const [filters, setFilters] = useState({
    subject: '',
    level: '',
    year: '',
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
      key: 'year',
      header: 'Year',
    },
    {
      key: 'questions',
      header: 'Questions',
    },
  ];
  // Handlers
  const handleEdit = (item: any) => {
    setFormData({
      title: item.title,
      subject: item.subject,
      level: item.level,
      year: item.year,
      questions: item.questions.toString(),
    });
    setEditingId(item.id);
    setIsFormOpen(true);
  };
  const handleDelete = (item: any) => {
    if (window.confirm(`Are you sure you want to delete ${item.title}?`)) {
      setQuestions(questions.filter((q) => q.id !== item.id));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuestion = {
      id: editingId || Math.max(...questions.map((q) => q.id), 0) + 1,
      title: formData.title,
      subject: formData.subject,
      level: formData.level,
      year: formData.year,
      questions: parseInt(formData.questions) || 0,
    };
    if (editingId) {
      setQuestions(
        questions.map((q) => (q.id === editingId ? newQuestion : q))
      );
    } else {
      setQuestions([...questions, newQuestion]);
    }
    // Reset form
    setFormData({
      title: '',
      subject: '',
      level: '',
      year: '',
      questions: '',
    });
    setEditingId(null);
    setIsFormOpen(false);
  };
  // Filter data
  const filteredData = questions.filter((q) => {
    return (
      (filters.subject === '' ||
        q.subject.toLowerCase().includes(filters.subject.toLowerCase())) &&
      (filters.level === '' || q.level === filters.level) &&
      (filters.year === '' || q.year === filters.year)
    );
  });
  // Get unique values for filters
  const subjects = [...new Set(questions.map((q) => q.subject))];
  const levels = [...new Set(questions.map((q) => q.level))];
  const years = [...new Set(questions.map((q) => q.year))];
  return (
    <DashboardLayout title="Past Questions">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Manage Past Questions
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
            Add Past Question
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
                Year
              </label>
              <select
                value={filters.year}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    year: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">All Years</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
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
                  Year
                </label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      year: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Questions
                </label>
                <input
                  type="number"
                  value={formData.questions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      questions: e.target.value,
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
                    title: '',
                    subject: '',
                    level: '',
                    year: '',
                    questions: '',
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
                {editingId ? 'Update Question' : 'Add Question'}
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
};

export default PastQuestions;
