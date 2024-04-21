/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { sharedControlComponents } from '@superset-ui/chart-controls';
import { Select } from 'src/components';
import { Input, InputNumber } from 'src/components/Input';
import Slider from 'src/components/Slider';
// import CurrencyControl from 'src/explore/components/controls/CurrencyControl';
// import CheckboxControl from 'src/explore/components/controls/CheckboxControl';
// import CurrencyControl from '../../CurrencyControl';
// import CheckboxControl from '../../CheckboxControl';
import controlMap from 'src/explore/components/controls';
import ConditionalFormattingControl from '../../ConditionalFormattingControl';

export const ControlFormItemComponents = {
  Slider,
  InputNumber,
  Input,
  Select,
  // Directly export Checkbox will result in "using name from external module" error
  // ref: https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but
  Checkbox: controlMap.CheckboxControl,
  RadioButtonControl: sharedControlComponents.RadioButtonControl,
  CurrencyControl: controlMap.CurrencyControl,
  ConditionalFormattingControl,
};
