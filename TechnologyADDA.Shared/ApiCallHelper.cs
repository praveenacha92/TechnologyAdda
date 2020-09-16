namespace TechnologyADDA.Shared
{
    using System;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;

    public class ApiCallHelper<T>
    {

        public static async Task<Response<T>> GetAsyncRequest(string actionUrl)
        {
            var client = GetHttpClient();
            HttpResponseMessage response = await client.GetAsync(actionUrl);
            var data = await GetResponseData(response);
            return data;
        }

        public static async Task<Response<T>> PostAsyncRequest(string actionUrl, T data)
        {
            var client = GetHttpClient();
            string jsonObject = JsonConvert.SerializeObject(data);
            HttpContent httpContent = new StringContent(jsonObject, Encoding.UTF8, "application/json");
            HttpRequestMessage request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri(client.BaseAddress + actionUrl),
                Content = httpContent
            };
            HttpResponseMessage response = await client.SendAsync(request);
            return await GetResponseData(response);
        }

        public static async Task<Response<T>> DeleteAsyncRequest(string actionUrl, T data)
        {
            var client = GetHttpClient();
            HttpResponseMessage response = await client.GetAsync(actionUrl);
            return await GetResponseData(response);
        }

        private static HttpClient GetHttpClient()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri(ApplicationConfig.GetApiUrl("ApiUrl"));
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return client;
        }

        private static async Task<Response<T>> GetResponseData(HttpResponseMessage responseMessage)
        {
            var response = new Response<T>();
            if (responseMessage.IsSuccessStatusCode)
            {
                var content = await responseMessage.Content.ReadAsStringAsync();
                response.Data = JsonConvert.DeserializeObject<T>(content);
            }
            else
            {
                response.StatusCode = responseMessage.StatusCode.ToString();
                response.StatusMessage = responseMessage.ReasonPhrase.ToString();
            }
            return response;
        }
    }
}
