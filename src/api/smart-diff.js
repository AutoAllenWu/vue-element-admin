import request from '@/utils/diff-request'

export function getAllTasks() {
  return request({
    url: '/api/task/get_all_task',
    method: 'get'
    //    params: { name }
  })
}
