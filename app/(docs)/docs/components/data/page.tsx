"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/mkl45/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/registry/mkl45/ui/table";
import { Chart } from "@/registry/mkl45/ui/chart";
import { Separator } from "@/registry/mkl45/ui/separator";
import { Button } from "@/registry/mkl45/ui/button";
import { Badge } from "@/registry/mkl45/ui/badge";
import { ComponentPreview } from "@/app/components/component-preview";
import { InstallTabs } from "@/app/components/install-tabs";
import { ChassisPlate } from "@/registry/mkl45/ui/chassis-plate";

export default function DataDocsPage() {
  const chartSample = `import { Chart } from "@/components/ui/chart";

export function Demo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <Chart type="bar" title="SPECTRUM RACK // FFT 16-BAND" color="amber" />
      <Chart type="oscilloscope" title="CRT-MONITOR 01A // ANALOG RF RASTER" color="emerald" />
    </div>
  );
}`;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--mkl-amb)] mb-1">
          <span>// SPEC: 07 DATA DISPLAY &amp; 08 SYSTEM CONSOLE</span>
          <span>•</span>
          <span>MIL-STD-810H</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          DATA DISPLAY &amp; TELEMETRY
        </h1>
        <p className="font-mono text-sm text-[var(--mkl-steel-1)] mt-2">
          Oscilloscope &amp; FFT dot-matrix spectrum monitors, logistics manifest zebra tables,
          bolted chassis cards, and milled hazard separators.
        </p>
      </div>

      {/* Main Interactive Charts Preview */}
      <ComponentPreview code={chartSample} title="DOT-MATRIX CRT TELEMETRY">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <Chart type="bar" title="SPECTRUM RACK 02 // FFT 16-BAND" color="amber" />
          <Chart type="oscilloscope" title="CRT-MONITOR 01A // ANALOG RF RASTER" color="emerald" />
        </div>
      </ComponentPreview>

      {/* Installation Tabs */}
      <div>
        <h2 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-2">
          INSTALLATION
        </h2>
        <InstallTabs componentName="chart" sourceCode={chartSample} />
      </div>

      {/* Logistics Manifest Table Demo */}
      <ChassisPlate title="CARRIER SPECTRUM MANIFEST // ACTIVE CHANNELS" serial="LOG-TABLE-07">
        <div className="space-y-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>CHANNEL ID</TableHead>
                <TableHead>CARRIER FREQ</TableHead>
                <TableHead>SIGNAL (DBM)</TableHead>
                <TableHead>ENCRYPTION</TableHead>
                <TableHead>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">CH-094 // DELTA</TableCell>
                <TableCell>142.8500 MHz</TableCell>
                <TableCell>-68.4 dBm</TableCell>
                <TableCell>AES-GCM-256</TableCell>
                <TableCell>
                  <Badge variant="secure" dot>LOCKED</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CH-112 // OMEGA</TableCell>
                <TableCell>224.1125 MHz</TableCell>
                <TableCell>-82.1 dBm</TableCell>
                <TableCell>TYPE-1 BATON</TableCell>
                <TableCell>
                  <Badge variant="caution" dot>SYNCING</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CH-007 // FOXTROT</TableCell>
                <TableCell>433.9200 MHz</TableCell>
                <TableCell>-118.0 dBm</TableCell>
                <TableCell>UNKNOWN</TableCell>
                <TableCell>
                  <Badge variant="danger" dot>LOST</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </ChassisPlate>

      {/* Chassis Cards & Hazard Separators */}
      <ChassisPlate title="CHASSIS MODULE CARDS &amp; HAZARD DIVIDERS" serial="STRUCT-08">
        <div className="space-y-6">
          <Separator variant="hazard" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card serial="PWR-01" hazardBorder>
              <CardHeader>
                <CardTitle>MAIN POWER REGULATOR</CardTitle>
                <CardDescription>Primary 28V DC bus regulation module with thermal cutoff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-2 rounded bg-[var(--mkl-surface-lowest)] font-mono text-xs text-[var(--mkl-amb)]">
                  MAIN RAIL: 27.94 V • HEAT SINK: 41.8°C NOMINAL
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-[10px] text-[var(--mkl-steel-1)]">STATUS: STABLE</span>
                <Button size="sm" variant="outline">CALIBRATE</Button>
              </CardFooter>
            </Card>

            <Card serial="ENC-02" hasScrews>
              <CardHeader>
                <CardTitle>SYNCHRONOUS ENCRYPTOR</CardTitle>
                <CardDescription>Military Type-1 hardware cryptographic sub-module</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-2 rounded bg-[var(--mkl-surface-lowest)] font-mono text-xs text-[#00E676]">
                  CYCLES: 1,490,200 • SEED ROTATION: ARMED
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button size="sm" variant="primary">RE-KEY CIPHER</Button>
              </CardFooter>
            </Card>
          </div>

          <Separator label="BUS ISOLATION BARRIER // 1000V DC RATED" />
        </div>
      </ChassisPlate>
    </div>
  );
}
