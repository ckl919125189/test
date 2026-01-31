#!/usr/bin/env node

/**
 * 测试仓库主文件
 * 由小k通过OpenClaw创建
 */

// 基础功能
function greet(name = 'World') {
  return `Hello ${name}!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// 工具函数
function getCurrentTime() {
  return new Date().toISOString();
}

function generateRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 主函数
function main() {
  console.log('=== 测试仓库 ===');
  console.log('创建时间: 2026-01-31');
  console.log('创建者: 小k (OpenClaw AI助手)');
  console.log('主人: 阿Ken');
  console.log('================\n');
  
  // 演示功能
  console.log('功能演示:');
  console.log(`greet('阿Ken'): ${greet('阿Ken')}`);
  console.log(`add(5, 3): ${add(5, 3)}`);
  console.log(`multiply(4, 7): ${multiply(4, 7)}`);
  console.log(`当前时间: ${getCurrentTime()}`);
  console.log(`随机数: ${generateRandomNumber()}`);
  
  console.log('\n✅ 所有功能运行正常！');
}

// 导出功能
module.exports = {
  greet,
  add,
  multiply,
  subtract,
  divide,
  getCurrentTime,
  generateRandomNumber
};

// 如果直接运行此文件
if (require.main === module) {
  main();
}
