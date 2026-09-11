'use client';

import React from 'react';
import { Award, ExternalLink, X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GovtCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GovtCertificateModal({ isOpen, onClose }: GovtCertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fade-in"
      />

      {/* Modal Box Container (Perfectly Centered & Scrollable) */}
      <div className="relative bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col z-10 overflow-hidden animate-scale-up my-auto">
        
        {/* Fixed Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 block">
                Govt. Licensed Travel Operator
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading leading-tight">
                HP Tourism Registration Certificate
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Certificate Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 flex-1 [scrollbar-width:thin]">
          
          {/* Certificate Replica Card */}
          <div className="bg-[#FAFBFB] rounded-2xl border-2 border-emerald-700/30 p-5 sm:p-6 relative shadow-xs space-y-5">
            
            {/* Header Seal */}
            <div className="text-center pb-4 border-b border-slate-200 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Official Govt Registration
              </div>
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-widest block font-mono">
                GOVERNMENT OF HIMACHAL PRADESH
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 font-heading uppercase tracking-wide">
                DEPARTMENT OF TOURISM & CIVIL AVIATION
              </h4>
              <p className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                CERTIFICATE OF REGISTRATION OF TRAVEL AGENT
              </p>
            </div>

            {/* Key Registration Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Certificate No</span>
                <strong className="text-xs sm:text-sm font-extrabold text-emerald-800 font-mono">241224/48355</strong>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Issue Date</span>
                <strong className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono">24-02-2025</strong>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Permanent Regd No</span>
                <strong className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono">DTO-SLN-5-477/2025</strong>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Valid Until (Renewal)</span>
                <strong className="text-xs sm:text-sm font-extrabold text-emerald-700 font-mono">23-02-2028</strong>
              </div>
            </div>

            {/* Business & Owner Details */}
            <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Registered Style & Business Name</span>
                <strong className="text-sm font-extrabold text-emerald-800 font-heading uppercase block mt-0.5">
                  &ldquo;PAHADI BAG PACKERS&rdquo;
                </strong>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Proprietor Name</span>
                <span className="text-slate-900 font-bold">Sh. Chirag Sautha S/o Sh. Rajeev Kumar</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Registered Office Address</span>
                <span className="text-slate-800 font-medium leading-relaxed block mt-0.5">
                  H. No. 223, Bhaktora Colony, Hospital Road, Ward No. 10, Solan, District Solan, Himachal Pradesh - 173212
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Prescribed Authority</span>
                <span className="text-slate-800 font-medium">Solan District Solan, H.P.</span>
              </div>
            </div>

            {/* Verification Footer Note & Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Computer generated certificate (No signature required)</span>
              </div>

              <a
                href="https://eservices.himachaltourism.gov.in/certificate-validation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Validate on HP Govt Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p className="text-center text-[11px] text-slate-500 font-mono">
            Registered under Himachal Pradesh Tourism Development and Registration Act, 2002
          </p>
        </div>
      </div>
    </div>
  );
}
