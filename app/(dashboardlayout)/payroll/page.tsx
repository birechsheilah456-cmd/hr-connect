"use client";
import React, { useState } from 'react';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle,
  Clock,
  MinusCircle,
  PlayCircle,
  Save,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

export default function RunPayrollPage() {
  const [employeeSelection, setEmployeeSelection] = useState<'all' | 'department'>('all');

  const inputClass =
    'w-full  border border-gray-300 rounded-md bg-white px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100';

  const sectionCard =
    'bg-white border border-gray-200 rounded-2xl p-6 shadow-sm';

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6">
        {/* Header */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                <span>Payroll</span>
                <span>•</span>
                <span className="font-medium text-gray-900">Run Payroll</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Run Payroll Configuration
              </h1>

              <p className="mt-2 text-base text-gray-600">
                Configure the current pay cycle, employee eligibility, and specific adjustments.
              </p>
            </div>

            <div className="flex w-full items-center gap-3 md:w-auto">
              <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 hover:bg-gray-50 md:flex-none">
                <Save className="h-4 w-4" />
                Save Draft
              </button>

              <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-700 md:flex-none">
                <PlayCircle className="h-4 w-4" />
                Initialize Run
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            {/* Step 1 */}
            <div className={sectionCard}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Step 1
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Pay Period Selection
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Pay Cycle Frequency
                  </label>

                  <select className={inputClass}>
import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function RunPayrollPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
              Payroll • <span className="text-gray-900 font-medium">Run Payroll</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Run Payroll Configuration</h1>
            <p className="text-gray-600 mt-2 text-base">Configure the current pay cycle, employee eligibility, and specific adjustments.</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium text-gray-700 text-sm">
              Save Draft
            </button>
            <button className="flex-1 md:flex-none px-5 py-2.5 bg-black text-white rounded-xl hover:bg-black/90 font-medium text-sm">
              Initialize Run
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Pay Period Selection */}
            <div className="bg-white border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold text-xs">1</div>
                <h2 className="text-xl font-semibold text-gray-900">Pay Period Selection</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Pay Cycle Frequency</p>
                  <select className="w-full border border-gray-300 rounded-2xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Monthly (Standard)</option>
                    <option>Bi-Weekly</option>
                    <option>Weekly</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Pay Period Range
                  </label>

                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <input type="date" defaultValue="2023-10-01" className={inputClass} />

                    <span className="text-sm font-medium text-gray-400">to</span>

                    <input type="date" defaultValue="2023-10-31" className={inputClass} />
                  <p className="text-xs font-medium text-gray-700 mb-2">Pay Period Range</p>
                  <div className="flex items-center gap-3">
                    <input
                      type="date"
                      defaultValue="2023-10-01"
                      className="flex-1 border border-gray-300 rounded-2xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-400 font-medium text-sm">to</span>
                    <input
                      type="date"
                      defaultValue="2023-10-31"
                      className="flex-1 border border-gray-300 rounded-2xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
                <span>ℹ️</span>
                <p>
                  This pay period includes <strong>22 working days</strong> and{' '}
                  <strong>2 public holidays</strong>.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={sectionCard}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Step 2
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Employee Selection
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setEmployeeSelection('all')}
                  className={`relative flex items-center gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${
                    employeeSelection === 'all'
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow'
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                      employeeSelection === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Users className="h-7 w-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">All Employees</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Include all 1,240 active personnel.
                    </p>
                  </div>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                      employeeSelection === 'all'
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {employeeSelection === 'all' && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setEmployeeSelection('department')}
                  className={`relative flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                    employeeSelection === 'department'
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow'
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                      employeeSelection === 'department'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Building2 className="h-7 w-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Specific Department</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Select departments or cost centers.
                    </p>
                  </div>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                      employeeSelection === 'department'
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {employeeSelection === 'department' && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                </button>
              <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-blue-700 text-xs flex gap-2">
                ℹ️ This pay period includes <strong>22 working days</strong> and <strong>2 public holidays</strong>.
              </div>
            </div>

            {/* 2. Employee Selection */}
            <div className="bg-white border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold text-xs">2</div>
                <h2 className="text-xl font-semibold text-gray-900">Employee Selection</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border-2 border-blue-600 rounded-3xl p-5 relative">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">👥</div>
                    <div>
                      <div className="font-semibold text-base text-gray-900">All Employees</div>
                      <div className="text-xs text-gray-600">Include all 1,240 active personnel.</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>

                <div className="border border-gray-200 hover:border-gray-300 transition-all rounded-3xl p-5 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🏢</div>
                    <div>
                      <div className="font-semibold text-base text-gray-900">Specific Department</div>
                      <div className="text-xs text-gray-600">Filter by departments or cost centers.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-medium text-gray-700 mb-3">Selected Departments</p>
                <div className="flex flex-wrap gap-2">
                  {['Engineering', 'Product Design', 'Marketing'].map((dept) => (
                    <div key={dept} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-xl text-xs flex items-center gap-1">
                      {dept} <span className="text-gray-400 cursor-pointer hover:text-red-500">×</span>
                    </div>
                  ))}
                  <button className="border border-dashed border-gray-300 px-3 py-1.5 rounded-xl text-xs text-gray-600 hover:bg-gray-50">
                    + Add Dept
                  </button>
                </div>
              </div>

              {employeeSelection === 'department' && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Selected Departments
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {['Engineering', 'Product Design', 'Marketing'].map((dept) => (
                      <div
                        key={dept}
                        className="flex items-center gap-2 rounded-md bg-blue-100 px-2 py-2 text-sm text-blue-700"
                      >
                        {dept}
                        <button type="button" className="text-blue-500 hover:text-red-500">
                          ×
                        </button>
                      </div>
                    ))}

                    <button className="rounded-xl border border-dashed border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
                      + Add Department
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3 */}
            <div className={sectionCard}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Wallet className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Step 3
                  </p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Adjustments &amp; Deductions
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Wallet className="h-5 w-5" />
                  </div>

                  <p className="text-sm text-gray-500">Performance Bonuses</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">$0.00</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Applied to Q3 Top Performers (42 employees)
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <MinusCircle className="h-5 w-5" />
                  </div>

                  <p className="text-sm text-gray-500">Additional Deductions</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">$0.00</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Benefit adjustments or loan repayments
                  </p>
            {/* 3. Adjustments & Deductions */}
            <div className="bg-white border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold text-xs">3</div>
                <h2 className="text-xl font-semibold text-gray-900">Adjustments &amp; Deductions</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border border-gray-200 rounded-3xl p-5">
                  <p className="text-xs text-gray-500">Performance Bonuses</p>
                  <p className="text-3xl font-semibold mt-1 text-gray-900">$0.00</p>
                  <p className="text-xs text-gray-600 mt-1">Applied to Q3 Top Performers (42 employees)</p>
                </div>

                <div className="border border-gray-200 rounded-3xl p-5">
                  <p className="text-xs text-gray-500">Additional Deductions</p>
                  <p className="text-3xl font-semibold mt-1 text-gray-900">$0.00</p>
                  <p className="text-xs text-gray-600 mt-1">Benefit adjustments or loan repayments</p>
                </div>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border rounded-3xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">Compliance Check</h3>
                    <p className="text-xs text-gray-600 mt-1">All statutory tax filings for the period are updated and validated for <span className="font-medium">100% compliance</span>.</p>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900">Compliance Check</h3>
                <p className="mt-2 text-sm text-gray-600">
                  All statutory tax filings for the period are updated and validated for{' '}
                  <span className="font-medium">100% compliance</span>.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Wallet className="h-5 w-5 text-blue-600" />
              <div className="bg-white border rounded-3xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 text-xl">💰</div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">Funding Status</h3>
                    <p className="text-xs text-gray-600 mt-1">Company payroll account has sufficient liquidity to cover the estimated $4.33M disbursement.</p>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900">Funding Status</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Company payroll account has sufficient liquidity to cover the estimated
                  $4.33M disbursement.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                  <Clock className="h-5 w-5 text-amber-600" />
              <div className="bg-white border rounded-3xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">Timeline</h3>
                    <p className="text-xs text-gray-600 mt-1">Estimated processing time: 4 hours.<br />Funds scheduled to hit employee accounts on Nov 01.</p>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900">Timeline</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Estimated processing time: 4 hours.
                  <br />
                  Funds scheduled to hit employee accounts on Nov 01.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="bg-gray-900 p-6 text-white">
                <h3 className="text-lg font-semibold">Preview Summary</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Estimated figures for Oct 2023
                </p>
              </div>

              <div className="space-y-6 p-6">
                <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white border rounded-3xl sticky top-8 overflow-hidden shadow-sm">
              <div className="bg-linear-to-br from-zinc-900 to-black text-white p-6">
                <h3 className="text-lg font-semibold">Preview Summary</h3>
                <p className="text-gray-400 text-xs mt-1">Estimated figures for Oct 2023</p>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Eligible Employees</span>
                  <span className="text-xl font-bold text-gray-900">1,240</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Gross Pay</span>
                    <span className="font-medium text-gray-900">$4,250,000.00</span>
                  </div>

                  <div className="flex justify-between text-emerald-600">
                    <span>Total Bonuses</span>
                    <span>+$125,400.00</span>
                  </div>

                  <div className="flex justify-between text-red-600">
                    <span>Total Deductions</span>
                    <span>-$45,200.00</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm font-semibold text-gray-900">
                      ESTIMATED TOTAL
                    </span>

                    <span className="text-3xl font-bold text-emerald-600">
                      $4,330,200.00
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-sm text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                <div className="pt-5 border-t">
                  <div className="flex justify-between items-end">
                    <span className="font-semibold text-gray-900">ESTIMATED TOTAL</span>
                    <span className="text-3xl font-bold text-emerald-600">$4,330,200.00</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 mt-1 text-xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+2.4% Increase</span>
                  </div>
                </div>

                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700">
                  Execute Payroll Run
                  <ArrowRight className="h-4 w-4" />
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm">
                  Execute Payroll Run
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}